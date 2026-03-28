export const TiebaApiStatus = {
  isWebSuccess(data: any) {
    if (!data) return false;
    return data.error_code === "0" || data.error_code === 0 || data.no === 0;
  },
};
