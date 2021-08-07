import {
  Button,
  Box,
  makeStyles,
  IconButton,
  TextField,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import { Rnd } from 'react-rnd';
import clsx from 'clsx';
import { useMemo } from 'react';

export type MemeGeneratorProps = React.HTMLAttributes<HTMLDivElement> & {
  // Meme api to use
  memeApiUrl?: string;
  // Hard coded specific urls
  memeUrls?: string[];
  // Will append api results to urls
  appendApiResults?: boolean;
  memeApiCount?: number;
};

export type Meme = {
  url: string;
  box_count?: number;
  id?: string;
  name?: string;
  width?: number;
  height?: number;
};

export type ApiMeme = Required<Meme>;

const DEFAULT_MEME_API_URL = 'https://api.imgflip.com/get_memes';

const useStyles = makeStyles(({ spacing }) => ({
  selection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    padding: `${spacing(1)}px 0`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imgs: {
    display: 'flex',
    flexWrap: 'wrap',
    maxHeight: 250,
    overflow: 'auto',
    maxWidth: '80vw',
    justifyContent: 'center',
  },
  img: {
    cursor: 'pointer',
    height: '100px',
    margin: '3px',

    '&:hover,&:focus': {
      outline: '1px solid white',
    },
  },
  selected: {
    border: '3px solid #7DF9FF',
  },
  meme: {
    position: 'relative',
    width: '59%',
    margin: 'auto',

    '&>img': {
      width: '100%',
      maxHeight: 700,
      maxWidth: 700,
    },
    '& h2': {
      position: 'absolute',
      textAlign: 'center',
      left: '50%',
      transform: 'translateX(-50%)',
      fontFamily: 'impact, sans-serif',
      fontSize: '4em',
      textTransform: 'uppercase',
      color: 'white',
      letterSpacing: '1px',
      textShadow:
        '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
      cursor: 'move',
    },
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    '&>*:not(:first-child)': {
      margin: `0 ${spacing(1)}px`,
    },
  },
  inputsContainer: {
    display: 'flex',
  },
  text: {},
  unselected: {
    height: 700,
    width: 400,
    backgroundColor: 'gray',
  },
}));

const MEME_ID = 'meme-b8WHL8';

const MemeGenerator: React.FC<MemeGeneratorProps> = ({
  memeApiUrl = DEFAULT_MEME_API_URL,
  memeUrls = [],
  appendApiResults = false,
  memeApiCount = 30,
  ...divProps
}) => {
  const classes = useStyles();

  const [texts, setTexts] = useState<string[]>(['']);

  const [memes, setMemes] = useState<Meme[]>(
    memeUrls.map((url) => ({
      url,
    }))
  );
  const [selectedMeme, setSelectedMeme] = useState<Meme | undefined>();

  useEffect(() => {
    if (memeUrls.length && !appendApiResults) return;

    const checkMemes = async () => {
      const fetchResult = await fetch(memeApiUrl);
      const json = await fetchResult.json();

      const { data } = json;

      setMemes([...memes, ...data.memes.slice(0, memeApiCount)]);
    };
    checkMemes();
  }, []);

  const handleChange =
    (index: number): React.ChangeEventHandler<HTMLInputElement> =>
    ({ target: { value } }) => {
      setTexts([
        ...texts.slice(0, index),
        value,
        ...texts.slice(index + 1, texts.length),
      ]);
    };

  const downloadMeme = async () => {
    const el = document.getElementById(MEME_ID);
    if (!el) return;

    const canvas = await html2canvas(el, { allowTaint: true, useCORS: true });

    const imgData = canvas.toDataURL('image/png');
    const uri = imgData.replace(
      /^data:image\/[^;]/,
      'data:application/octet-stream'
    );
    const downloadLink = document.createElement('a');
    downloadLink.href = uri;
    downloadLink.download = 'meme.png';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const maxTextLength = useMemo(
    () => Math.max(...texts.map(({ length }) => length)),
    [...texts]
  );

  const addText = () => setTexts([...texts, '']);
  const removeText = () => setTexts([...texts.slice(0, texts.length - 1)]);

  const fontSize = maxTextLength < 10 ? 4 : 4 - maxTextLength / 20;

  const fontStyle = {
    fontSize: `${fontSize}em`,
  };

  return (
    <div {...divProps}>
      <div className={classes.selection}>
        <div className={classes.imgs}>
          {memes.map((meme) => (
            <img
              key={meme.id}
              tabIndex={0}
              alt={meme.name ?? 'meme image to select'}
              className={classes.img}
              onClick={() => setSelectedMeme(meme)}
              src={meme.url}
            />
          ))}
        </div>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            downloadMeme();
          }}
        >
          <div className={classes.inputsContainer}>
            {texts.map((text, index) => (
              <div className={classes.inputContainer} key={`t${index}`}>
                <TextField
                  label={`Text ${index + 1}`}
                  placeholder="Enter Text"
                  type="text"
                  value={text}
                  onChange={handleChange(index)}
                />
                {index === texts.length - 1 && (
                  <>
                    <IconButton size="small" onClick={addText}>
                      <AddIcon fontSize="small" />
                    </IconButton>
                    {index > 0 && (
                      <IconButton size="small" onClick={removeText}>
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
          <Box mt={2}>
            <Button onClick={downloadMeme} variant="contained">
              Save
            </Button>
          </Box>
        </form>
      </div>
      <br />
      <div
        id={MEME_ID}
        className={clsx(classes.meme, !selectedMeme && classes.unselected)}
      >
        {!selectedMeme ? '' : <img src={selectedMeme.url} alt="meme" />}
        {!selectedMeme
          ? ''
          : texts.map((text) => (
              <Rnd enableResizing bounds="parent">
                <h2 style={fontStyle} className={classes.text}>
                  {text}
                </h2>
              </Rnd>
            ))}
      </div>
    </div>
  );
};

export default MemeGenerator;
