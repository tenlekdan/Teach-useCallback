import styled from 'styled-components';
import Child from './Child';
import { useCallback, useState } from 'react';
const Button = styled.button({
  borderRadius: '5px',
  backgroundColor: 'blue',
  color: '#fff',
  border: 'none',
});

const allUsers = [
  'House Tully',
  'House Tyrell',
  'House Baratheon',
  'House Targaryen',
  'House Arryn',
  'House Stark',
  'The Lannisters',
  'House Greyjoy',
  'HOuse Mertell',
];
const ListItem = styled.li({
  listStyle: 'none',
});
export default function Parent() {
  const [users, setUsers] = useState(allUsers);

  const inputChange = useCallback(
    (label: string) => {
      console.log(users[0]);
      const filteredUser = allUsers.filter((user) => user.includes(label));
      setUsers(filteredUser);
    },
    [users]
  );

  const handleShuffle = () => {
    setUsers((prev) => {
      return shuffleArray([...prev]);
    });
  };
  function shuffleArray(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <>
      <p>Mon Parent</p>
      <Button onClick={handleShuffle}>Suffle</Button>
      <Child handleOnChange={inputChange}></Child>
      <ul>
        {users.map((user) => (
          <ListItem>{user}</ListItem>
        ))}
      </ul>
    </>
  );
}
