const UserCard = ({ name, email, phone, website }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white">
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Phone: {phone}</p>
        <p className="text-gray-600">Website: {website}</p>
      </div>
    </div>
  );
};

export default UserCard;
