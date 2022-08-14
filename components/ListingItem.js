export default function ListingItem({
  companyName,
  position,
  status,
  dateApplied,
  handleStatusChange,
  index
}) {
  return (
    <div className="grid grid-cols-9 w-full rounded-lg bg-[color:var(--gray)] p-4 justify-center">
      <div id="company-name" className="col-span-2 flex items-center">
        {companyName}
      </div>
      <div id="position" className="col-span-2 flex items-center">
        {position}
      </div>
      <select
        id="status"
        className="col-span-2 flex items-center rounded-lg bg-white cursor-pointer pl-2 mr-8"
        defaultValue={status}
        onChange={(e) => handleStatusChange(e.target.value, index)}
      >
        <option value="" disabled>
          Choose an application status
        </option>
        <option value="Applied">Applied</option>
        <option value="Online Test">Online Test</option>
        <option value="Interview">Interview</option>
        <option value="Rejected">Rejected</option>
        <option value="Accepted">Accepted</option>
      </select>
      <div id="date-applied" className="col-span-2 flex items-center">
        {dateApplied}
      </div>
      <button className="bg-white rounded-lg p-1 hover:bg-[color:var(--skin)] transition-colors text-center">
        Details
      </button>
    </div>
  );
}
