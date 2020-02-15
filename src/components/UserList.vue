<template>
<div>
  <!-- Subscribers List -->
  <div class="bg-gray-200 h-full">
    <div class="flex px-12 items-center pt-4">
        <a href="#" @click.prevent="showModal = true" class="text-2xl cursor-pointer">
            <i class="icon-plus-circle text-blue-700 font-bold"></i>
        </a>
        <div class="pl-5">
            <span class="text-xl">Users</span>
        </div>
        <div class="flex items-center ml-auto w-1/4">
            <div>
                <img class="w-3 h-3" src="../icons/icon-search.svg" alt="">
            </div>
            <div class="flex w-full">
                <div class="mr-5 w-full pr-4">
                    <input class="w-full bg-gray-200 outline-none ml-2 pl-2 pt-2 pb-1 text-gray-500 text-sm border border-l-0 border-r-0 border-t-0 border-gray-400" type="text" name="filter_customers" placeholder="Filter Users">
                </div>
                <div class="flex items-end pb-1 text-sm">
                    <i class="text-blue-700 icon-list-ul"></i>
                    <i class="text-gray-600 icon-th-large"></i>
                </div>
            </div>
        </div>
    </div>
    <div class="flex px-12 items-center justify-center mt-4 rounded">
        <div class="w-full overflow-x-auto rounded" style="max-width: 1366px; min-width: 950px; box-shadow: 5px 5px 5px 5px #d5e3ec30;">
            <table class="w-full table-auto">
                <thead class="bg-gray-100 text-gray-500 text-xs">
                    <th class="text-left pl-6 w-20 h-12 text-base"><i class="icon-sort-amount-asc text-blue-800"></i></th>
                    <th>NAME <i class="icon-sort-alpha-asc"></i></th>
                    <th class="text-left">BUSINESS <i class="icon-sort-alpha-asc"></i></th>
                    <th class="text-left">EMAIL <i class="icon-sort-alpha-asc"></i></th>
                    <th class="text-left">PHONE <i class="icon-sort-alpha-asc"></i></th>
                    <th class="text-right">CUSTOMER SINCE <i class="icon-sort-alpha-asc"></i></th>
                    <th class="w-24"></th>
                </thead>
                <tbody>
                    <tr class="bg-white h-16 text-center cursor-pointer hover:bg-gray-100 text-sm font-medium">
                        <td class="text-left pl-6">1</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
                                <span class="text-sm font-medium tracking-wider ml-4">Clayton Martin</span>
                            </div>
                        </td>
                        <td class="text-sm text-left text-gray-700">McDonalds</td>
                        <td class="text-sm text-left text-gray-700">chrisbreuer93@gmail.com</td>
                        <td class="text-sm text-left text-gray-700">(808) 218-8241</td>
                        <td class="text-sm text-right text-gray-700">10m ago</td>
                        <td class="text-xl text-blue-500 align-middle px-2 tracking-widest"><i class="icon-ellipsis"></i></td>
                    </tr>
                    <tr class="bg-white h-16 text-center cursor-pointer hover:bg-gray-100 text-sm font-medium">
                        <td class="text-left pl-6">1</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
                                <span class="text-sm font-medium tracking-wider ml-4">Clayton Martin</span>
                            </div>
                        </td>
                        <td class="text-sm text-left text-gray-700">McDonalds</td>
                        <td class="text-sm text-left text-gray-700">chrisbreuer93@gmail.com</td>
                        <td class="text-sm text-left text-gray-700">(808) 218-8241</td>
                        <td class="text-sm text-right text-gray-700">10m ago</td>
                        <td class="text-xl text-blue-500 align-middle px-2 tracking-widest"><i class="icon-ellipsis"></i></td>
                    </tr>
                    <tr class="bg-white h-16 text-center cursor-pointer hover:bg-gray-100 text-sm font-medium">
                        <td class="text-left pl-6">1</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
                                <span class="text-sm font-medium tracking-wider ml-4">Clayton Martin</span>
                            </div>
                        </td>
                        <td class="text-sm text-left text-gray-700">McDonalds</td>
                        <td class="text-sm text-left text-gray-700">chrisbreuer93@gmail.com</td>
                        <td class="text-sm text-left text-gray-700">(808) 218-8241</td>
                        <td class="text-sm text-right text-gray-700">10m ago</td>
                        <td class="text-xl text-blue-500 align-middle px-2 tracking-widest"><i class="icon-ellipsis"></i></td>
                    </tr>
                    <tr class="bg-white h-16 text-center cursor-pointer hover:bg-gray-100 text-sm font-medium">
                        <td class="text-left pl-6">1</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
                                <span class="text-sm font-medium tracking-wider ml-4">Clayton Martin</span>
                            </div>
                        </td>
                        <td class="text-sm text-left text-gray-700">McDonalds</td>
                        <td class="text-sm text-left text-gray-700">chrisbreuer93@gmail.com</td>
                        <td class="text-sm text-left text-gray-700">(808) 218-8241</td>
                        <td class="text-sm text-right text-gray-700">10m ago</td>
                        <td class="text-xl text-blue-500 align-middle px-2 tracking-widest"><i class="icon-ellipsis"></i></td>
                    </tr>
                    <tr class="bg-white h-16 text-center cursor-pointer hover:bg-gray-100 text-sm font-medium">
                        <td class="text-left pl-6">1</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
                                <span class="text-sm font-medium tracking-wider ml-4">Clayton Martin</span>
                            </div>
                        </td>
                        <td class="text-sm text-left text-gray-700">McDonalds</td>
                        <td class="text-sm text-left text-gray-700">chrisbreuer93@gmail.com</td>
                        <td class="text-sm text-left text-gray-700">(808) 218-8241</td>
                        <td class="text-sm text-right text-gray-700">10m ago</td>
                        <td class="text-xl text-blue-500 align-middle px-2 tracking-widest"><i class="icon-ellipsis"></i></td>
                    </tr>
                    <tr class="bg-white h-16 text-center cursor-pointer hover:bg-gray-100 text-sm font-medium">
                        <td class="text-left pl-6">1</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
                                <span class="text-sm font-medium tracking-wider ml-4">Clayton Martin</span>
                            </div>
                        </td>
                        <td class="text-sm text-left text-gray-700">McDonalds</td>
                        <td class="text-sm text-left text-gray-700">chrisbreuer93@gmail.com</td>
                        <td class="text-sm text-left text-gray-700">(808) 218-8241</td>
                        <td class="text-sm text-right text-gray-700">10m ago</td>
                        <td class="text-xl text-blue-500 align-middle px-2 tracking-widest"><i class="icon-ellipsis"></i></td>
                    </tr>
                    <tr class="bg-white h-16 text-center cursor-pointer hover:bg-gray-100 text-sm font-medium">
                        <td class="text-left pl-6">1</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
                                <span class="text-sm font-medium tracking-wider ml-4">Clayton Martin</span>
                            </div>
                        </td>
                        <td class="text-sm text-left text-gray-700">McDonalds</td>
                        <td class="text-sm text-left text-gray-700">chrisbreuer93@gmail.com</td>
                        <td class="text-sm text-left text-gray-700">(808) 218-8241</td>
                        <td class="text-sm text-right text-gray-700">10m ago</td>
                        <td class="text-xl text-blue-500 align-middle px-2 tracking-widest"><i class="icon-ellipsis"></i></td>
                    </tr>
                    <tr class="bg-white h-16 text-center cursor-pointer hover:bg-gray-100 text-sm font-medium">
                        <td class="text-left pl-6">1</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
                                <span class="text-sm font-medium tracking-wider ml-4">Clayton Martin</span>
                            </div>
                        </td>
                        <td class="text-sm text-left text-gray-700">McDonalds</td>
                        <td class="text-sm text-left text-gray-700">chrisbreuer93@gmail.com</td>
                        <td class="text-sm text-left text-gray-700">(808) 218-8241</td>
                        <td class="text-sm text-right text-gray-700">10m ago</td>
                        <td class="text-xl text-blue-500 align-middle px-2 tracking-widest"><i class="icon-ellipsis"></i></td>
                    </tr>
                    <tr class="bg-white h-16 text-center cursor-pointer hover:bg-gray-100 text-sm font-medium">
                        <td class="text-left pl-6">1</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
                                <span class="text-sm font-medium tracking-wider ml-4">Clayton Martin</span>
                            </div>
                        </td>
                        <td class="text-sm text-left text-gray-700">McDonalds</td>
                        <td class="text-sm text-left text-gray-700">chrisbreuer93@gmail.com</td>
                        <td class="text-sm text-left text-gray-700">(808) 218-8241</td>
                        <td class="text-sm text-right text-gray-700">10m ago</td>
                        <td class="text-xl text-blue-500 align-middle px-2 tracking-widest"><i class="icon-ellipsis"></i></td>
                    </tr>
                    <tr class="bg-white h-16 text-center cursor-pointer hover:bg-gray-100 text-sm font-medium">
                        <td class="text-left pl-6">1</td>
                        <td>
                            <div class="flex items-center">
                                <img src="https://picsum.photos/70" class="bg-blue-200 rounded-full w-10 h-10"></img>
                                <span class="text-sm font-medium tracking-wider ml-4">Clayton Martin</span>
                            </div>
                        </td>
                        <td class="text-sm text-left text-gray-700">McDonalds</td>
                        <td class="text-sm text-left text-gray-700">chrisbreuer93@gmail.com</td>
                        <td class="text-sm text-left text-gray-700">(808) 218-8241</td>
                        <td class="text-sm text-right text-gray-700">10m ago</td>
                        <td class="text-xl text-blue-500 align-middle px-2 tracking-widest"><i class="icon-ellipsis"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="flex px-12 items-center justify-center mt-6 rounded">
        <div class="text-sm text-gray-500 cursor-pointer">
            <span><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
            <span class="ml-4">Prev</span>
        </div>
        <div class="mx-4 text-xs">
            <button class="w-10 h-10 bg-gray-200 hover:bg-blue-600 hover:text-white rounded font-medium">1</button>
            <button class="w-10 h-10 bg-blue-800 hover:bg-blue-600 hover:text-white rounded font-medium text-white">2</button>
            <button class="w-10 h-10 bg-gray-200 hover:bg-blue-600 hover:text-white rounded font-medium">3</button>
            <button class="w-10 h-10 bg-gray-200 hover:bg-blue-600 hover:text-white rounded font-medium">4</button>
            <button class="w-10 h-10 bg-gray-200 hover:bg-blue-600 hover:text-white rounded font-medium">5</button>
        </div>
        <div class="text-sm text-gray-500 cursor-pointer">
            <span class="mr-4">Next</span>
            <span><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
        </div>
    </div>
  </div>

  <Modal v-model="showModal" />
</div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },

  components: {
    Modal: () => import('@/components/Modals/User')
  },

  data () {
    return {
      showModal: false,
    }
  }
}
</script>