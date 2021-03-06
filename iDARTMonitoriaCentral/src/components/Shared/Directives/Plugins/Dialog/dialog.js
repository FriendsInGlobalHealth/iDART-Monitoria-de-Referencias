import { Dialog } from 'quasar';

export const alert = (
  title,
  message,
  onOKMethod,
  onCancelMethod,
  onDismissMethod
) => {
  return Dialog.create({
    title: title,
    message: message,
    color: 'red',
  })
    .onOk(() => {
      //  onOKMethod();
    })
    .onCancel(() => {
      //  onCancelMethod();
    })
    .onDismiss(() => {
      //  onDismissMethod();
    });
};

export const confirm = (title, message) => {
  return Dialog.create({
    title: title,
    message: message,
    cancel: true,
    persistent: true,
  });
};

export const prompt = (
  title,
  message,
  onOKMethod,
  onCancelMethod,
  onDismissMethod
) => {
  return Dialog.create({
    title: title,
    message: message,
    prompt: {
      model: '',
      type: 'text', // optional
    },
    cancel: true,
    persistent: true,
  })
    .onOk((data) => {
      onOKMethod(data);
    })
    .onCancel(() => {
      onCancelMethod();
    })
    .onDismiss(() => {
      onDismissMethod();
    });
};
