import LoginView from "@/widgets/login";
import { UnauthenticatedOnly } from "@/features/auth/components/unauthenticated-only.component";

export default function LoginPage() {
  return (
    <UnauthenticatedOnly>
      <LoginView />
    </UnauthenticatedOnly>
  );
}
