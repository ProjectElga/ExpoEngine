import notifee from "@notifee/react-native";
import { log } from "react-native-reanimated";

// const sendFCMNotification = async (title, body, token) => {
const PushNotification = async (token, title = "SHAER", body) => {
  console.log("PushNotification sending ==>", token, title, body);
  if (token) {
    const apiKey =
      "AAAAe04kEFE:APA91bHk8Gv1khNXPf74t_zsjldW5Y-ZoEMLwj57a7s2Zv2aD_IkdPg6Gabbe5SEd4IhE3CCtbyn60_f1zXYmhU-nIDAVy34OSHYS3QCM7R3M3F8cCAZF3JZeBdztmUDDH3p7UeCXArD";
    const url = `https://fcm.googleapis.com/fcm/send`;

    const message = {
      notification: {
        title: title,
        body: body,
      },
      to: token,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `key=${apiKey}`,
        },
        body: JSON.stringify(message),
      });

      if (response.ok) {
        console.log("FCM notification sent successfully!");
      } else {
        console.log("Failed to send FCM notification.");
      }
    } catch (error) {
      console.log("Error sending FCM notification:", error);
    }
  }
};

export default PushNotification;
