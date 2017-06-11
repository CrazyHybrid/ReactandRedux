/**
 * Created by ForYouForever on 4/20/2017.
 */
const items = [
    {
        label: "HOME",
        icon:"fa fa-bicycle  aria-hidden=true",
        child: [
            {
                child_label: "HOME",
                url: "/"
            }

        ]
    },
    {
        label: "PROFILES",
        icon:"fa fa-bicycle  aria-hidden=true",
        child: [
            {
                child_label: "AVATAR",
                url: "/profile/avatar"
            },
            {
                child_label: "CHANGE PASSWORD",
                url: "/profile/changePassword"
            }
        ]
    },
    {
        label: "JOBS",
        icon:"fa fa-tags  aria-hidden=true",
        child: [
            {
                child_label: "VIEW",
                url: "/profile/view"
            },
            {
                child_label: "MANAGE",
                url: "/profile/changePassword"
            }
        ]
    },
    {
        label: "SETTING",
        icon:"fa fa-settings",
        child: [
            {
                child_label: "SKILLS",
                url: "/setting/skills"
            }
        ]
    }
]

export default items;