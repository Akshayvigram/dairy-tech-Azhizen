
// // import express from 'express';
// // import db from '../firebaseAdmin.js';
// // import { sendSlackMessage, formatEnquiryMessage, formatContactMessage } from '../utils/slackNotifier.js';

// // const router = express.Router();

// // // 1. ROUTE FOR ENQUIRY COLLECTION
// // router.post('/submit-enquiry', async (req, res) => {
// //   try {
// //     const data = req.body;

// //     // Save to Firebase
// //     const docRef = await db.collection('enquiries').add({
// //       ...data,
// //       source: 'EnquiryForm',
// //       createdAt: new Date().toISOString()
// //     });

// //     // Send Slack notification
// //     const slackMessage = formatEnquiryMessage(data);
// //     await sendSlackMessage(slackMessage);

// //     res.status(201).json({ success: true, message: "Enquiry saved!", id: docRef.id });
// //   } catch (error) {
// //     console.error('Error in submit-enquiry:', error);
// //     res.status(500).json({ success: false, message: error.message });
// //   }
// // });

// // // 2. ROUTE FOR CONTACT COLLECTION
// // router.post('/submit-contact', async (req, res) => {
// //   try {
// //     const { firstName, lastName, email, message } = req.body;

// //     const contactData = {
// //       fullName: `${firstName} ${lastName}`,
// //       email,
// //       message,
// //       source: 'ContactPage',
// //       createdAt: new Date().toISOString()
// //     };

// //     // Save to Firebase
// //     const docRef = await db.collection('contacts').add(contactData);

// //     // Send Slack notification
// //     const slackMessage = formatContactMessage(contactData);
// //     await sendSlackMessage(slackMessage);

// //     res.status(201).json({ success: true, message: "Contact saved!", id: docRef.id });
// //   } catch (error) {
// //     console.error('Error in submit-contact:', error);
// //     res.status(500).json({ success: false, message: error.message });
// //   }
// // });

// // export default router;


// import express from 'express';
// import { db, collection, addDoc, serverTimestamp } from '../firebaseAdmin.js';
// import { sendSlackMessage, formatEnquiryMessage, formatContactMessage } from '../utils/slackNotifier.js';

// const router = express.Router();

// // 1. Enquiry Page Route -> Sends to Enquiries channel
// router.post('/submit-enquiry', async (req, res) => {
//   try {
//     const enquiryData = req.body;

//     const docRef = await addDoc(collection(db, 'enquiries'), {
//       ...enquiryData,
//       createdAt: serverTimestamp(),
//     });

//     const slackPayload = formatEnquiryMessage(enquiryData);
//     await sendSlackMessage(slackPayload, process.env.SLACK_ENQUIRY_WEBHOOK_URL);

//     return res.status(200).json({
//       success: true,
//       message: 'Enquiry submitted successfully!',
//       id: docRef.id,
//     });
//   } catch (error) {
//     console.error('Error saving enquiry:', error);
//     return res.status(500).json({ success: false, error: error.message });
//   }
// });

// // 2. Contact Page Route -> Sends to Contacts channel
// router.post('/submit-contact', async (req, res) => {
//   try {
//     const contactData = req.body;

//     const docRef = await addDoc(collection(db, 'contacts'), {
//       ...contactData,
//       createdAt: serverTimestamp(),
//     });

//     const slackPayload = formatContactMessage(contactData);
//     await sendSlackMessage(slackPayload, process.env.SLACK_CONTACT_WEBHOOK_URL);

//     return res.status(200).json({
//       success: true,
//       message: 'Contact message submitted successfully!',
//       id: docRef.id,
//     });
//   } catch (error) {
//     console.error('Error saving contact:', error);
//     return res.status(500).json({ success: false, error: error.message });
//   }
// });

// export default router;

import express from 'express';
import { db, collection, addDoc } from '../firebaseAdmin.js';
import { sendSlackMessage, formatEnquiryMessage, formatContactMessage } from '../utils/slackNotifier.js';

const router = express.Router();

// Helper to strip out any keys that have undefined values
const sanitizeData = (data) => {
  const clean = {};
  for (const [key, value] of Object.entries(data)) {
    if (value !== undefined) {
      clean[key] = value;
    }
  }
  return clean;
};

// 1. Enquiry Page Route -> Sends to Enquiries channel
router.post('/submit-enquiry', async (req, res) => {
  try {
    const rawData = req.body || {};
    const enquiryData = sanitizeData(rawData);

    // Save to Firestore using an ISO Date string instead of serverTimestamp()
    const docRef = await addDoc(collection(db, 'enquiries'), {
      ...enquiryData,
      createdAt: new Date().toISOString(),
    });

    // Send Slack alert
    const slackPayload = formatEnquiryMessage(enquiryData);
    await sendSlackMessage(slackPayload, process.env.SLACK_ENQUIRY_WEBHOOK_URL);

    return res.status(200).json({
      success: true,
      message: 'Enquiry submitted successfully!',
      id: docRef.id,
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

// 2. Contact Page Route -> Sends to Contacts channel
router.post('/submit-contact', async (req, res) => {
  try {
    const rawData = req.body || {};
    const contactData = sanitizeData(rawData);

    // Save to Firestore using an ISO Date string instead of serverTimestamp()
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...contactData,
      createdAt: new Date().toISOString(),
    });

    // Send Slack alert
    const slackPayload = formatContactMessage(contactData);
    await sendSlackMessage(slackPayload, process.env.SLACK_CONTACT_WEBHOOK_URL);

    return res.status(200).json({
      success: true,
      message: 'Contact message submitted successfully!',
      id: docRef.id,
    });
  } catch (error) {
    console.error('Error saving contact:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

export default router;