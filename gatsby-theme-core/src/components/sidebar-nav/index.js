import Category from './category';
import PropTypes from 'prop-types';
import React, {Fragment, useEffect, useMemo, useState} from 'react';
import styled from '@emotion/styled';
import usePrevious from 'react-use/lib/usePrevious';
import {IconCollapseList} from '@apollo/space-kit/icons/IconCollapseList';
import {IconExpandList} from '@apollo/space-kit/icons/IconExpandList';
import {IconOutlink} from '@apollo/space-kit/icons/IconOutlink';
import {Link, withPrefix} from 'gatsby';
import {colors} from '../../utils/colors';
import {size} from 'polished';
import {smallCaps} from '../../utils/typography';

const StyledList = styled.ul({
  marginLeft: 0,
  listStyle: 'none',
  marginBottom: 32
});

const listItemStyles = {
  color: 'inherit',
  ':hover': {
    opacity: colors.hoverOpacity
  }
};

const StyledListItem = styled.li({
  fontSize: '1rem',
  lineHeight: 1.5,
  marginBottom: '0.8125rem',
  a: {
    ...listItemStyles,
    textDecoration: 'none',
    '&.active': {
      color: colors.primary,
      pointerEvents: 'none'
    }
  }
});

const ExpandAll = styled.button(listItemStyles, smallCaps, {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 12,
  padding: '4px 0',
  border: 0,
  fontSize: 12,
  fontWeight: 600,
  lineHeight: 1,
  background: 'none',
  outline: 'none',
  cursor: 'pointer',
  svg: {
    ...size(12),
    marginRight: 8
  }
});

const StyledOutlinkIcon = styled(IconOutlink)(size(14), {
  verticalAlign: -1,
  marginLeft: 8,
  color: colors.text3
});

function getId(title) {
  return withPrefix(title);
}

function isPageSelected(path, pathname) {
  const [a, b] = [withPrefix(path), pathname].map(string =>
    string.replace(/\/$/, '')
  );
  return a === b;
}

function isCategorySelected({path, pages}, pathname) {
  return path
    ? isPageSelected(path, pathname)
    : pages.some(page => isPageSelected(page.path, pathname));
}

function getSidebarState(contents, pathname) {
  const activeCategory = contents.find(category =>
    isCategorySelected(category, pathname)
  );
  if (activeCategory) {
    return {[getId(activeCategory.title)]: true};
  }

  return {};
}

export default function SidebarNav(props) {
  const prevPathname = usePrevious(props.pathname);
  const [state, setState] = useState(
    getSidebarState(props.contents, props.pathname)
  );

  const allExpanded = useMemo(
    () => props.contents.every(({title}) => state[getId(title)]),
    [props.contents, state]
  );

  useEffect(() => {
    if (props.pathname !== prevPathname) {
      const category = props.contents.find(({pages}) =>
        pages.find(page => isPageSelected(page.path, props.pathname))
      );
      if (category) {
        const id = getId(category.title);
        if (!state[id]) {
          setState(prevState => ({
            ...prevState,
            [id]: true
          }));
        }
      }
    }
  }, [props.contents, props.pathname, prevPathname, state, setState]);

  function toggleCategory(title) {
    setState(prevState => {
      const id = getId(title);
      const expanded = !prevState[id];

      if (props.onToggleCategory) {
        props.onToggleCategory(title, expanded);
      }

      return {
        ...prevState,
        [id]: expanded
      };
    });
  }

  function toggleAll() {
    const expanded = !allExpanded;
    setState(
      props.contents.reduce(
        (acc, {title}) => ({
          ...acc,
          [getId(title)]: expanded
        }),
        {}
      )
    );

    if (props.onToggleAll) {
      props.onToggleAll(expanded);
    }
  }

  return (
    <Fragment>
      {props.contents.map(({title, path, pages}, index, array) => {
        const contents = (
          <StyledList>
            {pages.map(page => (
              <StyledListItem key={page.path}>
                {page.anchor ? (
                  <a href={page.path} target="_blank" rel="noopener noreferrer">
                    {page.title}
                    <StyledOutlinkIcon />
                  </a>
                ) : (
                  <Link
                    className={
                      isPageSelected(page.path, props.pathname)
                        ? 'active'
                        : null
                    }
                    to={page.path}
                    onClick={props.onLinkClick}
                  >
                    {page.title}
                  </Link>
                )}
              </StyledListItem>
            ))}
          </StyledList>
        );

        if (!title) {
          const Icon = allExpanded ? IconCollapseList : IconExpandList;
          return (
            <Fragment key="root">
              {contents}
              {array.length > 2 && (
                <ExpandAll onClick={toggleAll}>
                  <Icon />
                  {allExpanded ? 'Collapse' : 'Expand'} all
                </ExpandAll>
              )}
            </Fragment>
          );
        }

        return (
          <Category
            key={title}
            title={title}
            path={path}
            expanded={Boolean(state[getId(title)] || props.alwaysExpanded)}
            active={isCategorySelected({pages, path}, props.pathname)}
            onClick={props.alwaysExpanded ? null : toggleCategory}
          >
            {contents}
          </Category>
        );
      })}
    </Fragment>
  );
}

SidebarNav.propTypes = {
  alwaysExpanded: PropTypes.bool,
  contents: PropTypes.array.isRequired,
  pathname: PropTypes.string.isRequired,
  onToggleAll: PropTypes.func,
  onToggleCategory: PropTypes.func,
  onLinkClick: PropTypes.func
};
