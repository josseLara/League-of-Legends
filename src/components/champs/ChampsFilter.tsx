import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setChamps } from '../../redux/states';
import { AppDispatch } from '../../redux/store';
import { getChamps } from '../../service/getAllChamps'
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

const tags = ["All", "Support", "Tank", "Fighter", "Mage", "Assassin", "Marksman"]

export function ChampsFilter() {
  const dispatch = useDispatch<AppDispatch>();
  const [champsByFilter, setChampsByFilter] = React.useState([])
  const [filter, setFilter] = React.useState('All')
  const [input, setInput] = React.useState('')

  React.useEffect(() => {
    inputRef.current.focus();
    getChamps().then(data => setChampsByFilter(Object.values(data)));
  }, [])

  React.useEffect(() => {
    const filterByTag = () => {
      if (filter === 'All') {
        const newChamps = champsByFilter.filter((champ: any) => champ.id.toLowerCase().startsWith(input.toLowerCase()))
        return dispatch(setChamps(newChamps))
      } else {
        const newChamps = champsByFilter.filter((champ: any) => champ.tags.includes(filter)
          && champ.id.toLowerCase().startsWith(input.toLowerCase()))
        return dispatch(setChamps(newChamps))
      }
    };
    filterByTag()
  }, [champsByFilter, dispatch, filter, input])


  const StyledButtonGroup = styled(ButtonGroup)({
    // change the button group dividers color
    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
      borderRight: 'none'
    },
    '& .css-m97oia-MuiButtonBase-root-MuiButton-root:hover': {
      textDecoration: 'inherent'
    },
  });

  const inputRef = React.useRef(null);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#67ACF0',
      }
    },
  });


  return (
    <Box sx={{ marginBottom: '35px', width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row-reverse',flexWrap:'wrap',justifyContent:'start' }}>
      <Box sx={{width:'100%', display: 'flex', flexWrap: "wrap", alignItems: 'flex-end', justifyContent: 'center', marginBottom: '20px' }}>
        <ThemeProvider theme={theme}>
          <OutlinedInput
            color='primary'
            inputRef={inputRef}
            onChange={(e) => setInput(e?.target?.value)}
            placeholder='Search champion'
            type='text'
            sx={{ color: 'white', fontFamily: "'Nokora', sans-serif", border: '1px solid #FFFFFF',borderRadius:'20px', width: { md: '30%', xs: '80%' },height:'40px' }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </ThemeProvider>
      </Box>

      <StyledButtonGroup variant="text" aria-label="text button group" size="large"
        sx={{
          width:'590px',
          display: 'flex',
          flexWrap: "wrap",
        }}
      >
        {tags.map(tag => (
          <Button onClick={() => setFilter(tag)}
            key={tag} sx={{
              color: '#fff',
              fontFamily: "'Nokora', sans-serif",
              textDecoration: filter === tag && "underline solid #67ACF0",
              textUnderlineOffset: '13px',
              textDecorationThickness: '3px',
              fontSize:'1rem'
            }}>
            {tag}
          </Button>
        ))}
      </StyledButtonGroup>
    </Box >
  );
}
