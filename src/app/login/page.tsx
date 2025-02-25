"use client";
import H27Title from "@/components/subTitle/H27Title";
import TopBanner from "@/components/topBanner/TopBanner";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { useEmailLogin, useSocialLogin } from "./_api";
import LoginButton from "./_components/LoginButton";
import LoginForm from "./_components/LoginForm";
import LoginModal from "./_components/loginModal/LoginModal";
import NotUserContent from "./_components/NotUserContent";
import SocialLogin from "./_components/SocialLogin";

const LoginContent = () => {
  const params = useSearchParams();
  const [modalOpen, setModalOpen] = useState(false);
  const cookies = new Cookies();
  const { mutate } = useEmailLogin();
  const [isErrorMsg, setIsErrorMsg] = useState("");
  const { mutate: socialMutate } = useSocialLogin();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const code = params.get("code");
  const navigate = useRouter();
  const handleSocialType = (title: string) => {
    sessionStorage.setItem("socialType", title);
  };

  useEffect(() => {
    if (code) {
      console.log(sessionStorage.getItem("socialType"));
      if (sessionStorage.getItem("socialType")) {
        socialMutate(
          { code, socialType: sessionStorage.getItem("socialType")! },
          {
            onSuccess: (data) => {
              cookies.set("token", data!.headers["authorization"]);
              cookies.set("refreshToken", data!.headers["refresh-token"]);
              navigate.push("/");
            },
          }
        );
      }
    }
  }, [code]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
      <TopBanner />
      <div className="pt-[200px] flex flex-col w-[562px]">
        <H27Title title="계정에 로그인 하세요" />
        <LoginForm
          loginData={loginData}
          setLoginData={setLoginData}
          setIsErrorMsg={setIsErrorMsg}
        />
        <div className="mt-3">
          <p className="text-[red]">{isErrorMsg}</p>
        </div>
        <LoginButton
          onClick={() => {
            if (!loginData.email || !loginData.password) {
              setIsErrorMsg("이메일 또는 비밀번호를 입력해주세요.");
              return;
            }
            mutate(loginData, {
              onSuccess: (data) => {
                cookies.set("token", data!["authorization"]);
                cookies.set("refreshToken", data!["refresh-token"]);
                navigate.push("/");
              },
              onError: (error: any) => {
                if (error.message === "404") {
                  setIsErrorMsg("존재하지 않는 이메일입니다.");
                  return;
                }
                setIsErrorMsg("이메일 또는 비밀번호가 일치하지 않습니다.");
              },
            });
          }}
        />
        <SocialLogin
          loginType="kakao"
          link="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=438cf3e1fed5cae3fa8aba30fd11373c&redirect_uri=http://localhost:3000/login&prompt=login"
          title="카카오 로그인"
          onClick={() => handleSocialType("kakao")}
        />
        <SocialLogin
          loginType="google"
          link="https://accounts.google.com/o/oauth2/auth?client_id=935790641586-mka3tc08fttdofiodu8v295569ntugnj.apps.googleusercontent.com&redirect_uri=http://localhost:3000/login&response_type=code&scope=openid email profile"
          title="구글 로그인"
          onClick={() => handleSocialType("google")}
        />
        <SocialLogin
          loginType="naver"
          link="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${REDIRECT_URI}"
          title="네이버 로그인"
          onClick={() => handleSocialType("naver")}
        />
        <NotUserContent setModalOpen={setModalOpen} />
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <LoginContent />
    </Suspense>
  );
};

export default Login;
