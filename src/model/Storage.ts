export const storage = {
  setItem: (name: string, item: any) => {
    localStorage.setItem(name, JSON.stringify(item));
  },
  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    if (!item) return false;
    return JSON.parse(item);
  },
};
