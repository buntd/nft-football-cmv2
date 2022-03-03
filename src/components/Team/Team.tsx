import React from "react";
import { TeamWrapper, TeamItems } from "./Team.styles";

import Lewandovski from "../../assets/Legends/lewandovski.png";
import Messi from "../../assets/Legends/Messi.png";
import Ronaldo from "../../assets/Legends/Ronaldo.png";
import { SectionTitle } from "../../theme";
import { v4 as randomID } from "uuid";
import TeamItem from "./TeamItem";

const TEAM_DATA = [
  {
    name: "Mike",
    image: Messi,
    role: "CEO, Marketing",
    twitterLink: "https://twitter.com/osalacio",
    instagramLink: "https://instagram.com/",
  },
  {
    name: "Richard",
    image: Ronaldo,
    role: "Designer",
    twitterLink: "https://twitter.com/nft_nerd",
    instagramLink: "https://instagram.com/",
  },
  {
    name: "Kiril",
    image: Lewandovski,
    role: "Developer, Management",
    twitterLink: "https://twitter.com/Kir3K5",
    instagramLink: "https://instagram.com/kreelox/",
  },
];

function Team() {
  return (
    <TeamWrapper id="team">
      <SectionTitle>Team</SectionTitle>
      <TeamItems>
        {TEAM_DATA.map((member) => (
          <TeamItem key={randomID()} {...member} />
        ))}
      </TeamItems>
    </TeamWrapper>
  );
}

export default Team;
