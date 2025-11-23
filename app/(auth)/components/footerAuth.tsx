"use client";
import ParagraphWrapper from '@/app/components/typography/paragraphText'
import Link from 'next/link'
export default function FooterAuth({ login }: { login: boolean }) {
    return (
        <>
            {login ? (
                <>
                    <ParagraphWrapper >
                        Forgot your password ?
                        <a href="#" className="text-ChilisRed ml-1 hover:underline">
                            Reset here
                        </a>
                    </ParagraphWrapper >
                    <ParagraphWrapper >
                        Don’t have an account?
                        <Link href="/register" className="bg-red text-ChilisRed ml-1 hover:underline">
                            Register
                        </Link>
                    </ParagraphWrapper>
                </>
            ) : (
                <ParagraphWrapper>
                    Already have an account?
                    <Link href="/login" className="text-ChilisRed ml-1 hover:underline">
                        Login
                    </Link>
                </ParagraphWrapper>
            )
            }
        </>

    )
}
