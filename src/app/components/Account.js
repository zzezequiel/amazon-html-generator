import AccountTab from "./accountTab";

export default function Account(props) {
    return (
        <div className="lg:w-1/4 md:w-1/3 md:px-3">
              <div className="relative md:-mt-48 -mt-32">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                  <div className="profile-pic text-center mb-5">
                    <input id="pro-img" name="profile-image" type="file" className="hidden" />
                    {/* <div>
                      <div className="relative h-28 w-28 mx-auto">
                        <Image src="/images/client/05.jpg" width={112} height={112} className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800" id="profile-image" alt="" />
                        <label className="absolute inset-0 cursor-pointer" htmlFor="pro-img"></label>
                      </div>

                      <div className="mt-4">
                        <h5 className="text-lg font-semibold">Jenny Jimenez</h5>
                        <p className="text-slate-400">jennyhot@hotmail.com</p>
                      </div> */}

                    <div>
                      LogIn
                    </div>
                  </div>
                  <AccountTab />
                </div>
              </div>
            </div>
    )
}
