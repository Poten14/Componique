import Badge from "./Badge";
import { FaStar } from 'react-icons/fa';
const BadgeIcon = () => {
  return (
    <Badge type="icon" content="IconBadge" icon={<FaStar />} color="bg-yellow-500" textColor="text-white"/>
  )
}
export default BadgeIcon