import Button from "../components/Button.js";
import { GoBell, GoCloud, GoDatabase } from "react-icons/go";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded>
          <GoBell />
          primary
        </Button>
      </div>
      <div>
        <Button secondary rounded>
          <GoCloud />
          secondary
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase />
          success
        </Button>
      </div>
      <div>
        <Button danger rounded>
          danger
        </Button>
      </div>
      <div>
        <Button warning rounded>
          warning
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
