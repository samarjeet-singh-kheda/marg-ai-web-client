function Banner() {
  return (
    <div className="grid h-[10.9375rem] grid-cols-[60%_40%] rounded-[1.25rem] bg-[#4D44B5] text-white">
      <div className="flex flex-col justify-center px-10">
        <h2 className="text-[2rem] font-bold">Welcome Back, Teacher_Name 👋</h2>

        <p className="w-[80%] text-wrap text-[0.9375rem] font-normal">
          You have 27 new students added to your domain. Please reach out to the
          Administrator if you want them excluded from your domain.
        </p>
      </div>

      <img
        src="img/home-page-banner.png"
        alt="banner"
        width={390}
        height={200}
        className="translate-y-2"
      />
    </div>
  );
}

export default Banner;
