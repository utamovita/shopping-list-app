import RegisterForm from "@/features/auth/components/register-form.component";

export default function RegisterView() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-muted p-4">
      <RegisterForm />
    </div>
  );
}
