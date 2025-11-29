import { Button } from '@/components/ui/button'
interface SubmitButtonProps {
    isSubmitting: boolean;
    register: boolean;
}
export default function SubmitButton({ isSubmitting, register }: SubmitButtonProps) {
    return (
        <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full  rounded-lg transition disabled:opacity-50 buttonCili"
        >
            {isSubmitting ? `${register ? "Loading..." : "Loading..."}` : `${register ? "Register" : "login"}`}
        </Button>
    )
}
