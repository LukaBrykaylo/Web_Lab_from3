import styled from '../styled';

const SearchInput = styled.input`
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 5px;
`;

const SelectCategory = styled.select`
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 5px;
`;

const SelectSortOrder = styled.select`
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CatalogOptions = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-bottom: solid 2px #575757;
`;

const FindBut = styled.a`
  background-color: #474747;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  display: flex;
  justify-content: center;
  width: 100px;
  margin: 0 auto;
  margin-bottom: 11px; 
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #323232
  }
`;

export { SelectSortOrder, SelectCategory, SearchInput, CatalogOptions, FindBut }