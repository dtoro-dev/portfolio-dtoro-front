import { useTheme } from "@mui/material";

const VideoMask = (props) => {
  const theme = useTheme();
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266 60" {...props}>
      <path
        fill={theme.palette.background.paper}
        d="M121.9 13.9l-5 .1-.1 32.6h4.5c1.8 0 3.3-.6 4.5-1.9 1.2-1.2 1.8-2.7 1.8-4.5V19.5c0-1.5-.6-2.9-1.7-4-1.2-1.1-2.5-1.7-4-1.6zM180.9 33.9h-4.4l-.1 12.7h4.5c1.7 0 3.2-.6 4.5-1.9 1.2-1.3 1.9-2.8 1.9-4.5s-.6-3.2-1.9-4.5c-1.3-1.2-2.8-1.8-4.5-1.8zM182 13.9h-5.5v11.3h5.5c1.7 0 3-.6 4.1-1.8 1-1.2 1.5-2.5 1.5-3.9 0-1.5-.6-2.9-1.7-4-1-1.1-2.4-1.6-3.9-1.6zM247.3 19.2l-.3 2.7-3.2 20.2h6.9l-3-20.2z"
      />
      <path
        fill={theme.palette.background.paper}
        d="M0 0v60h266V0H0zm37.2 55.4h-8.1c-.2 0-.3-.1-.3-.4l-.1-36.7-7.6 10.9-7.5-10.9-.1 36.7c0 .2-.1.4-.3.4h-8c-.2 0-.3-.1-.3-.4L5 5.6c0-.2.1-.3.3-.3h8.8c.2 0 .4.1.5.3l6.6 9.5 6.6-9.5c.1-.2.3-.3.5-.3h8.9c.2 0 .3.1.3.3l.1 49.5c-.1.2-.2.3-.4.3zm29.9-8.8c.2 0 .3.1.3.4v8.2c0 .2-.1.3-.3.3H43.8c-.2 0-.3-.1-.3-.4l.1-49.5c0-.2.1-.3.3-.3H67c.2 0 .3.1.3.4v8.1c0 .2-.1.3-.3.3H52.3v11.2H67c.2 0 .3.1.3.3l.1 8.1c0 .2-.1.3-.3.3H52.3v12.6h14.8zm34.6 8.8h-8.1c-.2 0-.4-.1-.4-.4V33.9H82.5v21.2c0 .2-.1.4-.3.4h-8.1c-.2 0-.3-.1-.3-.4l.1-49.5c0-.2.1-.3.4-.3h8c.2 0 .4.1.4.3l-.1 19.6h10.8V5.6c0-.2.1-.3.3-.3h8c.2 0 .4.1.4.3l.1 49.5c-.1.2-.2.3-.5.3zm34.6-15.2c0 2.8-.7 5.3-2 7.6s-3.1 4.1-5.4 5.4c-2.3 1.3-4.8 2-7.6 2.1l-12.9.1c-.2 0-.4-.1-.4-.4l.1-49.5c0-.2.1-.3.3-.3l13.5-.1c2.6 0 5.1.6 7.2 1.9 2.2 1.3 3.9 3 5.2 5.2 1.3 2.2 1.9 4.6 1.9 7.2v20.8zm14.2 15.2h-8.1c-.2 0-.4-.1-.4-.4V5.6c0-.2.1-.3.3-.3h8.1c.2 0 .3.1.3.3l.1 49.5c-.1.2-.1.3-.3.3zm44.3-20.9c.8 1.8 1.2 3.7 1.2 5.8 0 2.8-.7 5.3-2 7.6s-3.2 4.1-5.4 5.5c-2.3 1.4-4.8 2.1-7.6 2.1h-13c-.2 0-.3-.1-.3-.4l.1-49.5c0-.2.1-.3.3-.3H182c2.7 0 5.2.7 7.3 2s3.9 3.1 5.1 5.2c1.2 2.2 1.9 4.5 1.9 7.1 0 2.1-.5 4-1.4 5.8-.9 1.8-2.1 3.2-3.3 4.3 1.4 1.3 2.4 2.9 3.2 4.8zm34.3 20.9H221c-.2 0-.4-.1-.4-.4V33.9h-10.8v21.2c0 .2-.1.4-.3.4h-8.1c-.2 0-.3-.1-.3-.4l.1-49.5c0-.2.1-.3.4-.3h8c.2 0 .4.1.4.3l-.1 19.6h10.8V5.6c0-.2.1-.3.3-.3h8c.2 0 .4.1.4.3l.1 49.5c-.1.2-.2.3-.4.3zm32.2 0h-8c-.2 0-.3-.1-.4-.4l-.8-5.3h-9.8l-.8 5.3c0 .2-.2.4-.4.4h-8c-.2 0-.3-.1-.3-.4l8.9-49.5c0-.2.2-.3.4-.3h10.4c.2 0 .3.1.4.3l8.6 49.5c.1.3 0 .4-.2.4z"
      />
    </svg>
  );
};

export default VideoMask;
