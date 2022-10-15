import React from "react";

export const usePagination = () => {
  const [pagination, setPagination] = React.useState<{
    previous: string;
    next: string;
  }>();

  const setPage = async (action: string) => {
    if (action === "next") {
      const response = await fetch(pagination!.next);
      const data = await response.json();
      const { next, previous } = data;
      setPagination({ next, previous });
      return data.results;
    } else {
      if (pagination!.previous !== null) {
        const response = await fetch(pagination!.previous);
        const data = await response.json();
        const { next, previous } = data;
        setPagination({ next, previous });
        return data.results;
      }
    }
    return null;
  };

  return {
    setPage,
    setPagination,
  };
};
