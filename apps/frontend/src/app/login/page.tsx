import AuthForm from "@/components/auth/auth-form";

export default function LoginPage() {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-muted">
            <AuthForm type="login" />
        </div>
    );
}
