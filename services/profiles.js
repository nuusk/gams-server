exports.getMe = async () => {
  try {
    const me = { _id: 1, avatar: 'https://i.pinimg.com/originals/44/cc/8b/44cc8b8064536e7975bd8bc170840f8a.jpg' };
    return me;
  } catch (err) {
    throw err;
  }
};
