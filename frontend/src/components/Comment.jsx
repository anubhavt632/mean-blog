import PropTypes from 'prop-types'; // Import PropTypes
import moment from 'moment';
import { useEffect, useState } from "react";

export default function Comment({ comment }) {
    const [user, setUser] = useState({});
    console.log(user);
    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await fetch(`/backend/user/${comment.userId}`);
                const data = await res.json();
                if (res.ok) {
                    setUser(data);
                }
            } catch (error) {
                console.log(error.message);
            }
        };
        getUser();
    }, [comment]);

    return (
        <div className='flex p-4 border-b dark:border-gray-600 text-sm'>
            <div className="flex-shrink-0 mr-3">
                <img className="w-10 h-10 rounded-full bg-gray-200" src={user.profilePicture} alt={user.username} />
            </div>
            <div className="flex-1">
                <div className="flex item-center mb-1">
                    <span className="font-bold mr-1 text-xs truncate">
                        {user ? `@${user.username}` : 'anonymous user'}
                    </span>
                    <span className='text-gray-500 text-xs'>
                        {moment(comment.createdAt).fromNow()}
                    </span>
                </div>
                <p className='text-gray-500 pb-2'>{comment.content}</p>
            </div>
        </div>
    );
}

// Validate the shape of the `comment` prop
Comment.propTypes = {
    comment: PropTypes.shape({
        userId: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
         // You might need to adjust the type based on the actual data type
        // Add other properties if needed
    }).isRequired,
};
