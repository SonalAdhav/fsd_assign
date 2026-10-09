// Props: name, image, description (passed from the parent component)
function ProfileCard({ name, image, description }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="avatar" />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
