import { Menu } from "./Menu";
import { StyledSubscriptionSection } from "./styled";
import { SubscriptionForm } from "./SubscriptionForm";

export function SubscriptionSection() {
  return (
    <StyledSubscriptionSection.Container>
      <StyledSubscriptionSection.Content>
        <Menu />
        <SubscriptionForm />
      </StyledSubscriptionSection.Content>
    </StyledSubscriptionSection.Container>
  )
}