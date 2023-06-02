import { Resident } from 'common/types';
import React, { useEffect, useState } from 'react';
import { getResidentData } from './residentCache';

function ResidentListItem(props: { url: string }) {
  const [residentData, setResidentData] = useState<Resident>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
    getResidentData(props.url)
      .then(setResidentData)
      .catch(() => setError(true));
  }, [props.url]);

  if (error) {
    return <li>Error while fetching resident data</li>;
  }
  if (!residentData) {
    return <li>Loading data...</li>;
  }

  return <li>{residentData.name}</li>;
}
export default ResidentListItem;
