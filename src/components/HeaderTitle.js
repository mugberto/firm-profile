import { useSelector } from 'react-redux';

const HeaderTitle = () => {
  const detailsData = useSelector((state) => state.detailsData);
  return (
    <span>{ Object.keys(detailsData).length === 0 ? 'All companies' : detailsData.profileData.companyName }</span>
  );
};

export default HeaderTitle;
