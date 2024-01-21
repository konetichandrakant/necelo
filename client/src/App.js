import React, { useRef } from "react";
import Header from "./components/Header";
import { IconButton, List, ListItem, Paper, ThemeProvider, createTheme, useMediaQuery } from "@mui/material";
import MyCard from "./components/MyCard";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function App() {

  const query = useMediaQuery("(min-width:700px)");

  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            paddingBottom: '10px',
            paddingTop: '10px',
            width: '50%',
            borderRadius: '5px',
            backgroundColor: '#6B71FB',
            textTransform: 'none',
            marginBottom: '0px'
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            padding: "0 !important",
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }
        }
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: '10px'
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            marginLeft: '2px',
            marginRight: '2px',
            marginTop: '2px',
            marginBottom: '2px',
            fontFamily: [
              'Nunito',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif'
            ].join(','),
          },
        },
      },
      MuiBox: {
        styleOverrides: {
          root: {
            display: 'flex !important',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: '0px 0px 2px rgba(1, 1, 1, 1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '16px',
            margin: "0px",
            justifyContent: 'center',
            borderRadius: '40px'
          }
        }
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            margin: '4px',
          },
          root: {
            margin: "0px",
          }
        }
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            margin: "5px",
            marginRight: "0px",
            marginLeft: "0px",
          }
        }
      },
      default: {
        styleOverrides: {
          root: {
            fontFamily: [
              'Nunito',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              'sans-serif'
            ].join(','),
          }
        }
      }
    },
  });

  const dialogTheme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: '#F8F6F5',
            textTransform: 'none',
            width: 'auto',
            padding: '10px',
            color: 'black',
            border: '1px solid #aca8a6'
          }
        }
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            margin: '4%',
          },
          root: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)'
          }
        }
      }
    }
  });

  const editOrDelete = (type, id) => {

  }

  const listRef = useRef(null);

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollLeft -= 250; // Adjust the scroll distance as needed
    }
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollLeft += 250; // Adjust the scroll distance as needed
    }
  };

  const items = [
    {
      title: "Green Card",
      amount: "$100.00",
      date: "January 21, 2024",
      color: "green"
    }, {
      title: "Red Card",
      amount: "$50.00",
      date: "January 21, 2024",
      color: "red"
    }, {
      title: "Red Card",
      amount: "$50.00",
      date: "January 21, 2024",
      color: "red"
    }, {
      title: "Red Card",
      amount: "$50.00",
      date: "January 21, 2024",
      color: "red"
    }, {
      title: "White",
      amount: "$20.00",
      date: "January 23, 2024",
      color: "white"
    }
  ]

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Paper style={{ overflowX: "auto", maxWidth: "100%" }}>
          <List ref={listRef}
            style={{ display: "flex", overflowX: "hidden", scrollBehavior: "smooth" }}>
            {items.map((item, index) => (
              <ListItem key={index} style={{ minWidth: "250px" }}>
                <MyCard
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                  color={item.color}
                />
              </ListItem>
            ))}
          </List>
          <IconButton
            onClick={scrollLeft}
            style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={scrollRight}
            style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Paper>
        <Paper style={{ overflowX: "auto", maxWidth: "100%" }}>
          <List ref={listRef}
            style={{ display: "flex", overflowX: "hidden", scrollBehavior: "smooth" }}>
            {items.map((item, index) => (
              <ListItem key={index} style={{ minWidth: "250px" }}>
                <MyCard
                  title={item.title}
                  amount={item.amount}
                  dueDate={item.date}
                  color={item.color}
                  editOrDelete={editOrDelete}
                />
              </ListItem>
            ))}
          </List>
          <IconButton
            onClick={scrollLeft}
            style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <IconButton
            onClick={scrollRight}
            style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)" }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default App;