import RegisterView from "@/widgets/register";
import { UnauthenticatedOnly } from "@/features/auth/components/unauthenticated-only.component";

export default function RegisterPage() {
  return (
    <UnauthenticatedOnly>
      <RegisterView />
    </UnauthenticatedOnly>
  );
}
