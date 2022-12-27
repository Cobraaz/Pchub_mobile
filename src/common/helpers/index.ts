export const selectUser = {
  id: true,
  sequenceNumber: true,
  name: true,
  email: true,
  role: true,
  avatar: true,
  disable: true,
  deleted: true,
  deletedBy: true,
  createdAt: true,
  updatedAt: true,
};

export const selectCategory = {
  id: true,
  sequenceNumber: true,
  name: true,
  image: true,
  home: true,
  commercial: true,
  userId: true,
  parentCategoryId: true,
  disable: true,
  deleted: true,
  deletedBy: true,
  createdAt: true,
  updatedAt: true,
  childCategory: true,
};
