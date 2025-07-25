const ResourceLabel = ({ status }) => {
  return (
    <>
      <span className={`tag is-medium ml-3 resource-${status}`}>{status}</span>
    </>
  );
};

export default ResourceLabel;
