import { useScript, React } from "react";
import axios from "axios";
import { Icon } from "@iconify/react";

import {
  Card,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Typography,
  Avatar,
  IconButton,
  CardMedia,
  // Icon,
} from "@mui/material";
import { MoreVertRounded } from "@mui/icons-material";
// import { AudioCard } from 'material-ui-player'

// import mui
import AddIcon from "@mui/icons-material/Add";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ShareIcon from "@mui/icons-material/Share";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { Link } from "react-router-dom";

const FriendCard = ({ userData }) => {
  return (
    <div>
      <Card
        variant="outlined"
        style={{ width: 300, height: 50, marginTop: 3, marginLeft: 3 }}
      >
        <div className="row-display">
          <div className="row-display userinfo-display">
            <Avatar
              sx={{ width: 30, height: 30 }}
              src={userData.profile_picture}
            >
              {/* replace this with the image of avatar stored in db */}
            </Avatar>

            <Typography className="single-item-flex-middlize" variant="par">
              {userData.username}
            </Typography>
          </div>

          <CardActions>
            <Button>
              <AddIcon fontSize="small" />
            </Button>

            <Button>
              <a href={userData.spotify_id}>
                <Icon icon="mdi:spotify" fontSize="medium" />
              </a>
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

export default FriendCard;
