set(SOURCES
    main.cpp
    MySource.cpp
)

add_executable(MyProject ${SOURCES})

# add_library(MyProjectLib ${SOURCES})

# If you have libraries to link against, do so here, e.g.:
# target_link_libraries(MyProject PRIVATE SomeLibrary)

target_include_directories(MyProject
    PUBLIC
        "${PROJECT_SOURCE_DIR}/include"
)
