import * as ACT from '../actions/types';
import person004 from '../assets/images/person-004.jpg';
import person005 from '../assets/images/person-005.jpg';
import person006 from '../assets/images/person-006.jpg';
import person007 from '../assets/images/person-007.jpg';
import person008 from '../assets/images/person-008.jpg';
import person009 from '../assets/images/person-009.jpg';
import person010 from '../assets/images/person-010.jpg';

const initialPeople = [
  {
    id: 1,
    name: 'Frank Ltarnam',
    position: 'CEO',
    img: person004 || '',
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 2,
    name: 'Bob Shefley',
    position: 'UI/UX Designer',
    img: person005,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 3,
    name: 'Jason Stewars',
    position: 'Full-Stack Developer',
    img: person006,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 4,
    name: 'Sabrina Rachel',
    position: 'Marketing',
    img: person007,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 5,
    name: 'Marissa Lawren',
    position: 'Customer Support',
    img: person008,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 6,
    name: 'Romane Regad',
    position: 'Jr UI/UX Designer',
    img: person009,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  {
    id: 7,
    name: 'Tania Ferreira',
    position: 'Business Analyst',
    img: person010,
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
];

export default (state = initialPeople, action) => {
  switch (action.type) {
    case ACT.ADD_PERSON: {
      return [...state, action.person];
    }
    case ACT.EDIT_PERSON: {
      return [
        ...state.slice(0, action.person.id - 1),
        { ...action.person },
        ...state.slice(action.person.id),
      ];
    }
    case ACT.DELETE_PERSON: {
      return state.filter(person => person.id !== action.id);
    }
    default: {
      return state;
    }
  }
};
