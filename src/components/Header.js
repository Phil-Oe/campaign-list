import React from "react";
import PropTypes from "prop-types";

const Header = () =>  (
  <div className="header col-group">
    <div className="header__entry col-2">Event days
      <div className="header__hover"><strong>Event days:</strong> The number of days this campaign was running.</div>
    </div>
    <div className="header__entry col-2">Lead conversion
      <div className="header__subentry"><strong>amount</strong> / value</div>
      <div className="header__hover"><strong>Lead conversion:</strong> The number of leads, that were generated and
        how much each of them is worth.
      </div>

    </div>
    <div className="header__entry col-2">Sales conversion
      <div className="header__subentry"><strong>amount</strong> / value</div>
      <div className="header__hover"><strong>Sales conversion:</strong> The number of successful sales and the average
        value of these sales.
      </div>

    </div>
    <div className="header__entry col-2">Reach
      <div className="header__hover"><strong>Reach:</strong> People that walked by the campaign.</div>
    </div>
    <div className="header__entry col-2">Views
      <div className="header__subentry">Capture rate</div>
      <div className="header__hover"><strong>Views:</strong> People that actually saw the campaign.<br/><strong>Capture
        rate:</strong> The percentage of reachable people, that saw the campaign.
      </div>
    </div>
    <div className="header__entry col-2">Interactions
      <div className="header__subentry">Interaction rate</div>
      <div className="header__hover"><strong>Interactions:</strong> People that interacted with the
        campaign.<br/><strong>Interaction rate:</strong> The percentage of people that saw the campaign and interacted
        with it.
      </div>
    </div>
  </div>
);

export default Header;