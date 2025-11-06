interface ProfileCardProps {
  name: string;
  icon: string;
  description: string;
}

export default function ProfileCard({ name, icon, description }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <img src={icon} alt={`${name} icon`} className="w-24 h-24 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-naatal-green-dark mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}