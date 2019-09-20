import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SearchBar = styled.input `
  width: 100%;
  padding: 8px 5px;
  border: 1px solid transparent;
  margin-bottom: 20px;
  font-size: 20px;
`

const List = styled.ul `
  font-size: 20px;
  list-style: none;
`

const ListItem = styled.li `
  margin-bottom: 5px;
`

const ItemContent = styled.span `
  margin-right: ${({ isBold }) => isBold ? '15px' : '5px'};
  color: ${({ isGrey }) => isGrey ? '#fafafa' : 'black'};
  font-weight: ${({ isBold }) => isBold ? '600' : '500'};
`

class UsersList extends Component {
  state = {
    users: [],
    isLoaded: false,
    search: ''
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => this.setState({
        isLoaded: true, 
        users: json 
      }));
  }
  componentDidUpdate() {
    console.log(this.state.isLoaded);
  }

  updateSearch(event) {
    this.setState({search: event.target.value})
  }


  render() {

    const isLoaded = this.state.isLoaded;
    const filteredUsers = this.state.users.filter(
      (user) => {
        return user.name.toLowerCase().indexOf(
          this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div>
        <Wrapper>
          <SearchBar
            type="text"
            placeholder="Search by user name..."
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
          <List>
          {isLoaded ? filteredUsers.map( user => (
              <ListItem key={user.id}>
                <ItemContent isGrey>{user.id}.</ItemContent>
                <ItemContent isBold>{user.name}</ItemContent>
                <ItemContent isGrey>@{user.username}</ItemContent>
              </ListItem>

            ))  : 'Ładowanie…'}
          </List>
        </Wrapper>
      </div>
    );
  }
}

export default UsersList;