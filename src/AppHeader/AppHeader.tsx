import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  useScrollTrigger,
  fade,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import BuyButton from '../BuyButton';

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    flexGrow: 1,
    backgroundColor: fade(palette.background.default, 0.95),
    color: palette.primary.main,
  },
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export type AppHeaderProps = {
  onMenuOpen: () => void;
};

const AppHeader: React.FC<AppHeaderProps> = ({ onMenuOpen }) => {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const elevation = trigger ? 4 : 0;

  return (
    <AppBar position="sticky" className={classes.root} elevation={elevation}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={onMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          SafeSeal
        </Typography>
        <BuyButton />
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
