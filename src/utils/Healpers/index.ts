export const getPageWidth = () => {
  const { innerWidth: width } = window;
  return width;
};

export const getEmployeeInitials = (
  firstName: string,
  lastName: string
): string => {
  return firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
};
export const getIconByName = (iconName: string) => {
  return `/images/${iconName}.svg`;
};
