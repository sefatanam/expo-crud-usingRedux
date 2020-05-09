export const GET_MEMBER = "GET_MEMBER";
export const DELETE_MEMBER ="DELETE_MEMBER"

export const getMember = (members) => ({
  type: GET_MEMBER,
  data: { members },
});

export const deleteMember =(id)=>({
  type:DELETE_MEMBER,
  data:{id}
})