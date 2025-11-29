"use client";
import ParagraphWrapper from '@/app/components/typography/paragraphText'
import Link from 'next/link'
export default function FooterAuth({ login }: { login: boolean }) {
    return (
        <>
            {login ? (
                <>
                    <ParagraphWrapper className="text-center my-3 ">
                        Forgot your password ?
                        <a href="#" className="text-ChilisRed ml-1 hover:underline text-center">
                            Reset here
                        </a>
                    </ParagraphWrapper  >
                    <ParagraphWrapper className="text-center mb-3">
                        Don’t have an account?
                        <Link href="/register" className="bg-red text-ChilisRed ml-1 hover:underline text-center ">
                            Register
                        </Link>
                    </ParagraphWrapper>
                </>
            ) : (
                <ParagraphWrapper className="text-center my-3 ">
                    Already have an account?
                    <Link href="/login" className="text-ChilisRed ml-1 hover:underline text-center">
                        Login
                    </Link>
                </ParagraphWrapper>
            )
            }
        </>

    )
}
