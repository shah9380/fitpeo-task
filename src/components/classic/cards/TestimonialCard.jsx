   
  function StarIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-5 w-5 text-yellow-400"
      >
        <path
          fillRule="evenodd"
          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
   
  export default function Testimonialdiv({name, rating, message, image}) {
    return (
      <div color="transparent" shadow={false} className="w-full flex flex-col gap-2 max-w-[26rem] border-b border-gray-700">
        <div
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4"
        >

            <img
                src={(image !== "" || image !== undefined) ? image : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"}
                className="w-8 h-8 rounded-full"
                alt={`userProfilePhoto`}
            />

            
              <p className="font-semibold">
                {name}
              </p>
          
        </div>
        <div className="5 flex items-center gap-0">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
        <div className="mb-6 p-0 text-sm text-white/70">
          <p>
            &quot;{message}&quot;
          </p>
        </div>
      </div>
    );
  }