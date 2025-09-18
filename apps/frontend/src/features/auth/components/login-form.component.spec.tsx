import { render, screen, renderHook } from "@testing-library/react";
import { useForm } from "react-hook-form";
import LoginForm from "./login-form.component";
import { useLoginForm } from "../hooks/use-login-form.hook";
import { type LoginDto } from "@repo/schemas";

jest.mock("../hooks/use-login-form.hook");

const mockUseLoginForm = useLoginForm as jest.Mock;

describe("LoginForm", () => {
  beforeEach(() => {
    const { result } = renderHook(() => useForm<LoginDto>());

    mockUseLoginForm.mockReturnValue({
      form: result.current,
      onSubmit: jest.fn(),
      isPending: false,
    });
  });

  it("should render all form elements correctly", () => {
    render(<LoginForm />);

    expect(
      screen.getByRole("heading", { name: "auth.loginTitle" }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText("formFields.email")).toBeInTheDocument();
    expect(screen.getByLabelText("formFields.password")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "auth.loginTitle" }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: "auth.registerTitle" }),
    ).toBeInTheDocument();
  });
});
