export const RemoveDynamicModalRenderer = ({
  renderModalDeletedTable = "No table name",
}) => {
  return (
    <div>
      <div>{renderModalDeletedTable}</div>
    </div>
  );
};
