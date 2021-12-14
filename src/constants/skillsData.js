import { BsPersonBadge } from 'react-icons/bs';
import { IoServerOutline } from 'react-icons/io5'
import { GiGearStickPattern } from 'react-icons/gi'

const skillsData = [
    {
        title: 'Frontend',
        skills: [
            'React',
            'Next',
            'Chakra UI',
            'Material UI',
            'HTML5',
            'CSS3',
            'Bootstrap'
        ],
        icon: <BsPersonBadge fontSize={'30px'} />
    },
    {
        title: 'Version Control',
        skills: [
            'Git',
            'GitHub'
        ],
        icon: <GiGearStickPattern fontSize={'30px'} />
    },
    {
        title: 'Backend',
        skills: [
            'Express',
            'MongoDB',
            'Node',
            'GraphQL',
        ],
        icon: <IoServerOutline fontSize={'30px'} />
    },
];

export default skillsData;