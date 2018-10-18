import {firebase} from './config';
import 'firebase/firestore';
import { notification } from "antd";

firebase.firestore().settings({ timestampsInSnapshots: true });

const handleError = error => {
  if (error === "failed-precondition") {
    notification.open({
      message: "Error",
      description:
        "Multiple tabs open, offline data only works in one tab at a a time."
    });
  } else if (error === "unimplemented") {
    notification.open({
      message: "Error",
      description: "Cannot save offline on this browser."
    });
  }
};

export const db = firebase
  .firestore()
  .enablePersistence()
  .then(() => firebase.firestore())
  .catch(err => {
    handleError(err.code);
    return firebase.firestore();
  });