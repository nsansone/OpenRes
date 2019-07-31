const revealDropdown = (event) => {
    event.stopPropagation(); 
    $(‘#gear - dropdown’).removeClass(‘hidden’);
    $(‘#gear - dropdown - btn’).off(‘click’, revealDropdown);
    $(document).on(‘click’, hideDropdown);
};

const hideDropdown = () => {
    $(‘#gear - dropdown’).addClass(‘hidden’);
    $(‘#gear - dropdown - btn’).on(‘click’, revealDropdown);
    $(document).off(‘click’, hideDropdown);
};

$(() => $(‘#gear - dropdown - btn’).on(‘click’, revealDropdown));